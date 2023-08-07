const { JSONCookie } = require('cookie-parser');
const Redis = require('../model/Redis');
const fs = require('fs');
const { error } = require('console');
const { emit } = require('process');

const socketEventHandler = (io) => {
  io.on("connection", (socket) => {  

    //소켓 에러처리
    socket.on('error', (error) => {
      console.log('[socketEventHandler socket.on(error)] error = ', error);
    });

    //스트리밍(채팅방)입장 roomName은 스트리밍 송출중인 회원의 userId
    socket.on('join_room', async ({roomName, userId}) => {
      try {
        socket.join(roomName);
        console.log('[joinRoom] roomName = ', roomName);
        console.log('[joinRoom] userId = ', userId);

        const{streamingViewer, totalStreamingViewer} = await updateViewer(roomName, userId);

        io.to(roomName).emit('join_room', {
          streamingViewer : streamingViewer,
          totalStreamingViewer : totalStreamingViewer
        });
        
      } catch (error) {
        console.log('[socketHandler join_room] error = ', error);
      }
    });
  
    //채팅메세지 보내기
    socket.on("send_message", (data) => {
      try {
        socket.to(data.room).emit("receive_message", data);
        console.log(` ${socket.id}가 보낸 메세지 : ${data}`);
      } catch (error) {
        console.log('[socketHandler send_message] error = ', error);
      }
    });
  
    socket.on("disconnect", () => {
      try {
      } catch (error) {
        console.log('[socketHandler disconnect] error = ', error);
      }
    });

    //스트리밍(채팅방) 떠나기, 실시간 시청자수 감소
    socket.on('leave_room', async (request) => {
      try {
        const userId = request.userId;
        const roomName = request.roomName;

        console.log('[sockeHandler leave_room] userId = ', userId);
        console.log('[sockeHandler leave_room] roomName = ', roomName);

        if(userId && roomName) {
          const streamingViewer = await leaveRoom(roomName, userId);
          console.log('[sockeHandler leave_room] streamingViewer = ', streamingViewer);

          socket.to(roomName).emit('leave_room' ,{
            streamingViewer : streamingViewer
          });
        }
      } catch (error) {
        console.log('[socketHandler leave_room] error = ', error);
      }
    });

    //실시간 스트리밍 제목, 카테고리 변경
    socket.on('updateStreamingTitleAndCategory', (data) => {
      try {
        const streamingTitle = data.streamingTitle;
        const streamingCategory = data.streamingCategory;
        const roomName = data.roomName;

        console.log('[socketHandler updateStreamingTitleAndcategory] data = ', data);
        io.to(roomName).emit('updateStreamingTitleAndCategory', {
          streamingTitle : streamingTitle,
          streamingCategory : streamingCategory
        });
      } catch (error) {
        console.log('[socketHandler updateStreamingTitle] error = ', error);
      }
    });

    socket.on('send_donation', async(data) => {
      try {
        const userId = data?.USER_ID;
        const streamerId = data?.STREAMING_USER_ID;
        const donationContent = data?.DONATION_CONTENT;
        const donationAmount = data?.DONATION_AMOUNT;

        console.log("???"+data?.USER_ID)
        console.log("st"+data?.streamingUserId)
        const fileUrl = `https://kr.object.ncloudstorage.com/donation/${userId}_${streamerId}.mp3`;
        const donationMent = `${userId}님이 ${donationAmount}원을 후원하였습니다.  ` + donationContent;
        console.log("?"+userId);
        
        io.to(streamerId).emit('receive_donation', {data, fileUrl : fileUrl , donationMent : donationMent} );
      } catch (error) {
        console.log('[socketHandler socket.on(send_donation)] error2 = ', error);  
      };
    });

    socket.on('ban_streaming', (data) => {
      const roomName = data.roomName;
      const banType = data.banType;
      const banContent = data.banContent;

      io.to(roomName).emit('ban_streaming', {
        banType : banType,
        banContent : banContent
      } );
    })
  });   
}

//스트리밍에 입장시 해당 스트리밍의 실시간 시청자수, 누적 시청자수 증가시킨 뒤 반환
async function updateViewer(roomName, userId) {
  try {
    let on_streaming = await Redis.client.get(roomName + '_onStreaming');

    if(on_streaming) {
      on_streaming = JSON.parse(on_streaming);
    
      //누적 시청자수 증가
      let viewerList = Array.from(on_streaming.viewerList);
      viewerList = new Set(viewerList);
      
      viewerList.add(userId);

      on_streaming.viewerList = Array.from(viewerList);
      on_streaming.totalStreamingViewer = viewerList.size;

      //실시간 시청자수 증가
      if(!on_streaming.streamingViewerList.includes(userId)) {
        on_streaming.streamingViewerList.push(userId);
        on_streaming.streamingViewer = on_streaming.streamingViewerList.length;
      }
      

      await Redis.client.set(roomName + '_onStreaming', JSON.stringify(on_streaming));

      return {
        'streamingViewer' : on_streaming.streamingViewer ,
        'totalStreamingViewer' : on_streaming.totalStreamingViewer
      };
  }else {
    throw new Error('updateViewer error');
  }
  } catch (error) {
    console.log('[socketHandler updateViewer] error = ', error);
  }
}

async function leaveRoom(roomName, userId) {
  try {
    const key = roomName + '_onStreaming'
    let streaming = await Redis.client.get(key);

    if(streaming) {
      streaming = JSON.parse(streaming);

      if(streaming.streamingViewerList.includes(userId)) {
        const index = streaming.streamingViewerList.indexOf(userId);
        streaming.streamingViewerList.splice(index, 1);
      }

      streaming.streamingViewer = streaming.streamingViewerList.length;

      await Redis.client.set(key, JSON.stringify(streaming));
      return streaming.streamingViewer;
    } else {
      throw new Error('leaveRoom error');
    }
  } catch (error) {
    console.log('[socketHandler leaveRoom] error = ', error);
  }
}

// async function updateStreamingTitle(userId) {
//   try {
//     const streaming = await Redis.client.get(userId + '_onStreaming');

//     if(streaming) {
//       const streamingTitle = JSON.parse(streaming).streamingTitle;
//       return streamingTitle;
//     } else {
//       throw new Error('updateStreamingTitle error');
//     }
//   } catch (error) {
//     console.log('[socketHandler updateStreamingTitle] error = ', error);
//   }
// }

// async function updateStreamingCategory(userId) {
//   try {
//     const streaming = await Redis.client.get(userId + '_onStreaming');

//     if(streaming) {
//       const streamingCategory = JSON.parse(streaming).streamingCategory;
//       return streamingCategory;
//     } else {
//       throw new Error('updateStreamingCategory error');
//     }
//   } catch (error) {
//     console.log('[socketHandler updateStreamingCategory] error = ', error);
//   }
// }

module.exports = socketEventHandler;