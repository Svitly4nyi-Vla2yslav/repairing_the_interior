import React from 'react';
import { FooterContainer, FooterContent, LinkTelegram, LinkViber, LinkWhatsApp } from './Footer.styled';
import { LinkText } from '../Navigation/Navigation.styled';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';


const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LinkViber href='viber://add?number=380677425138'>
        <PhoneInTalkIcon/>
        </LinkViber>
        <LinkTelegram href='https://t.me/+380677425138'>
        <TelegramIcon/>
        </LinkTelegram>
        <LinkWhatsApp href='https://wa.me/qr/UP3H4BHRPXLHC1'>
        <WhatsAppIcon/>
        </LinkWhatsApp>
        <LinkText href="tel:+380677425138">
          <PhoneAndroidIcon/>
        </LinkText>

      </FooterContent>
    </FooterContainer>
  );
};
export default Footer;
