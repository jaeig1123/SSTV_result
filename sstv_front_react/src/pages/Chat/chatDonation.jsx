import React from 'react';
import { Card_img, Card_header, Card_image, Chat_Donation, Chat_card, Card_content, Card_content_2, Card_userid, Card_user_span, Card_Amount, Card_Amount_2, Card_Amount_3, Card_body, Card_message } from './donationStyle';

const chatDonation = ({data})=> {

    return(
        <Chat_Donation>
            <Chat_card>
                <Card_header>
                    <Card_image>
                        <Card_img src={process.env.PUBLIC_URL+`/img/base_profile.jpg`}></Card_img>
                    </Card_image>
                    <Card_content>
                        <Card_content_2>
                            <Card_userid>
                                <Card_user_span>{data.USER_ID}</Card_user_span>
                            </Card_userid>
                            <Card_Amount>
                            <Card_Amount_2>
                                <Card_Amount_3>
                                   {data.DONATION_AMOUNT}
                                </Card_Amount_3>
                            </Card_Amount_2>
                        </Card_Amount>
                        </Card_content_2>
                        
                    </Card_content>
                    
                </Card_header>
                <Card_body>
                    <Card_message>{data.DONATION_CONTENT}</Card_message>
                </Card_body>
            </Chat_card>
        </Chat_Donation>
    )
}

export default chatDonation;