

import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import "./Navbar.css"
import { NavLink } from 'react-router-dom';



function NavbarTab() {
  return (
    <div className='nav-main-div-r'>
      <Navbar className="navbar-m" collapseOnSelect expand="lg" bg="white" variant="light" fixed="top" sticky-top >
        <Container>
          <Navbar.Brand  className='logoimage-svg' >
            <svg width="217" height="43" viewBox="0 0 217 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_534_376)">
                <path d="M43.7703 23.2206C42.5236 23.2452 41.2822 23.0506 40.1029 22.6454C39.1219 22.3082 38.2324 21.7484 37.5039 21.0099C36.7755 20.2714 36.2279 19.3742 35.9042 18.3887C35.5355 17.2861 35.3561 16.1291 35.3733 14.9666V4.29712H39.3984V14.9952C39.3649 15.5597 39.4471 16.1251 39.6398 16.6567C39.8326 17.1884 40.1319 17.675 40.5194 18.0869C40.9462 18.4734 41.4461 18.7705 41.9896 18.9607C42.533 19.151 43.1091 19.2304 43.6838 19.1944H49.6074V23.2208L43.7703 23.2206Z" fill="#231F20" />
                <path d="M60.7081 8.35182C60.6122 8.35182 60.5267 8.44841 60.4507 8.63942L55.3017 23.2203H51.0456L56.8558 6.91385C57.1171 6.0951 57.6559 5.39321 58.3793 4.92922C59.1092 4.51469 59.9342 4.29675 60.7736 4.29675C61.613 4.29675 62.438 4.51469 63.1679 4.92922C63.8848 5.39703 64.4181 6.0981 64.6777 6.91385L70.4867 23.2203H66.2318L61.0551 8.63942C60.9593 8.44769 60.8819 8.35182 60.8246 8.35182H60.7081Z" fill="#231F20" />
                <path d="M91.2226 18.1875C91.2309 18.8733 91.0987 19.5535 90.8341 20.1862C90.5892 20.7706 90.2213 21.2955 89.7556 21.7251C89.2835 22.1542 88.7316 22.4864 88.1315 22.7028C87.491 22.9358 86.8142 23.0527 86.1327 23.048C85.1135 23.0536 84.1234 22.7084 83.3287 22.0703C82.4623 21.3727 81.8258 20.4306 81.5018 19.3665L78.0228 9.01314C77.9457 8.53382 77.7249 8.29416 77.3605 8.29416C76.7474 8.29416 76.4408 8.67761 76.4407 9.44453V23.2202H72.2127V9.09966C72.2047 8.41401 72.3365 7.73392 72.6 7.10089C72.8457 6.51692 73.2134 5.99224 73.6785 5.56202C74.1514 5.1333 74.7036 4.80117 75.304 4.58433C75.9443 4.35113 76.6212 4.23421 77.3027 4.23909C78.3209 4.23996 79.3089 4.58469 80.1067 5.21739C80.9839 5.90469 81.6229 6.85034 81.9334 7.92065H81.9041L85.4136 18.274C85.4885 18.7533 85.7097 18.993 86.0736 18.993C86.6868 18.993 86.9938 18.6095 86.9945 17.8426V4.06714H91.2225L91.2226 18.1875Z" fill="#231F20" />
                <path d="M101.72 8.32318V23.2206H97.6932V8.32318H93.2355V4.29688H105.918V8.32318H101.72Z" fill="#231F20" />
                <path d="M113.769 8.35182C113.673 8.35182 113.588 8.44841 113.511 8.63942L108.363 23.2203H104.107L109.916 6.91385C110.177 6.0951 110.716 5.39321 111.439 4.92922C112.169 4.51469 112.994 4.29675 113.834 4.29675C114.673 4.29675 115.498 4.51469 116.228 4.92922C116.945 5.39703 117.478 6.0981 117.738 6.91385L123.548 23.2203H119.292L114.115 8.63942C114.019 8.44769 113.942 8.35182 113.886 8.35182H113.769Z" fill="#231F20" />
                <path d="M125.905 19.1945H136.201C136.407 19.1996 136.612 19.1569 136.799 19.0695C136.986 18.9822 137.151 18.8527 137.279 18.6912C137.56 18.3462 137.713 17.914 137.71 17.469C137.729 17.0194 137.581 16.5786 137.293 16.2326C137.163 16.0679 136.997 15.9355 136.807 15.8457C136.618 15.7559 136.41 15.7111 136.2 15.7148H131.11C130.13 15.7433 129.156 15.567 128.249 15.197C127.531 14.8931 126.884 14.4425 126.351 13.8741C125.871 13.3549 125.513 12.7363 125.301 12.0625C125.089 11.3829 124.982 10.675 124.985 9.96316C124.985 9.23518 125.101 8.51184 125.329 7.82047C125.548 7.13914 125.917 6.51528 126.407 5.99438C126.941 5.44709 127.589 5.02466 128.305 4.75737C129.203 4.43013 130.154 4.27417 131.109 4.29758H140.544V8.32388H130.622C130.408 8.32235 130.196 8.36644 130 8.45322C129.804 8.54 129.629 8.66748 129.487 8.82717C129.177 9.14665 129.006 9.57578 129.011 10.0208C129.008 10.2391 129.048 10.4559 129.13 10.6584C129.211 10.8609 129.333 11.045 129.487 11.1998C129.636 11.3582 129.816 11.4835 130.017 11.5677C130.217 11.652 130.433 11.6933 130.651 11.689H135.656C137.27 11.6003 138.86 12.1182 140.112 13.1412C140.684 13.697 141.127 14.3711 141.41 15.1164C141.694 15.8616 141.811 16.6599 141.753 17.4551C141.811 18.249 141.695 19.046 141.415 19.7909C141.134 20.5358 140.695 21.2107 140.127 21.769C138.852 22.8024 137.236 23.3205 135.598 23.2212H125.905V19.1945Z" fill="#ED1C24" />
                <path d="M144.109 17.3824C144.056 16.5984 144.175 15.8121 144.459 15.0791C144.742 14.3462 145.183 13.6844 145.75 13.1404C147.002 12.1171 148.592 11.5991 150.206 11.6882H154.003C154.22 11.6926 154.436 11.6514 154.637 11.5672C154.838 11.4829 155.019 11.3575 155.168 11.1991C155.322 11.0443 155.443 10.8602 155.525 10.6577C155.607 10.4552 155.647 10.2384 155.643 10.0201C155.649 9.57503 155.478 9.1459 155.168 8.82642C155.025 8.6666 154.85 8.53905 154.654 8.45227C154.458 8.36549 154.246 8.32146 154.032 8.32313H144.11V4.29683H153.544C154.49 4.27489 155.431 4.43086 156.319 4.75662C157.038 5.02672 157.691 5.44863 158.232 5.99363C158.73 6.51166 159.103 7.13611 159.324 7.81973C159.554 8.51561 159.67 9.24385 159.669 9.97667C159.672 10.6944 159.561 11.4081 159.339 12.0907C159.117 12.7636 158.754 13.3814 158.274 13.9028C157.742 14.4696 157.095 14.9157 156.376 15.2111C155.476 15.5696 154.513 15.7409 153.544 15.7144H149.662C149.452 15.7106 149.244 15.7553 149.055 15.8452C148.865 15.935 148.699 16.0674 148.569 16.2322C148.284 16.5695 148.131 16.9984 148.137 17.4398V23.2207H144.111L144.109 17.3824Z" fill="#ED1C24" />
                <path d="M167.318 15.7144C167.104 15.7127 166.892 15.7567 166.696 15.8435C166.5 15.9303 166.325 16.0578 166.182 16.2177C165.877 16.5573 165.708 16.9977 165.708 17.4543C165.708 17.9109 165.877 18.3513 166.182 18.691C166.329 18.853 166.51 18.9817 166.711 19.0685C166.912 19.1553 167.129 19.1982 167.348 19.1943H177.24V23.2206H167.807C166.829 23.2486 165.856 23.0774 164.946 22.7173C164.224 22.4204 163.576 21.9688 163.048 21.3943C162.566 20.8606 162.207 20.2271 161.997 19.539C161.789 18.8636 161.682 18.1608 161.681 17.454C161.682 16.7507 161.829 16.0553 162.113 15.4119C162.452 14.693 163.004 14.0956 163.694 13.7005C162.964 13.3261 162.385 12.7118 162.055 11.9609C161.786 11.1797 161.659 10.3565 161.681 9.53041C161.684 8.60349 161.93 7.69353 162.394 6.89124C162.858 6.08894 163.525 5.42232 164.327 4.9578C165.415 4.45421 166.61 4.22712 167.807 4.29669H177.24V8.323H167.318C167.104 8.32134 166.892 8.36537 166.696 8.45215C166.5 8.53893 166.325 8.66648 166.182 8.82629C165.882 9.14707 165.713 9.56824 165.708 10.0072C165.703 10.4461 165.862 10.8711 166.154 11.1989C166.306 11.3622 166.491 11.4905 166.697 11.575C166.903 11.6595 167.125 11.6981 167.348 11.6881H177.24V15.7144H167.318Z" fill="#ED1C24" />
                <path d="M179.857 17.3824C179.804 16.5985 179.923 15.8123 180.206 15.0793C180.489 14.3463 180.93 13.6845 181.497 13.1404C182.749 12.117 184.339 11.5991 185.954 11.6882H189.751C189.968 11.6925 190.185 11.6513 190.385 11.567C190.586 11.4828 190.767 11.3574 190.916 11.1991C191.07 11.0442 191.191 10.86 191.273 10.6575C191.354 10.455 191.394 10.2383 191.39 10.0201C191.396 9.57519 191.226 9.14606 190.916 8.82642C190.773 8.66659 190.598 8.53905 190.402 8.45227C190.206 8.36549 189.993 8.32147 189.779 8.32314H179.858V4.29683H189.291C190.236 4.27488 191.177 4.43085 192.065 4.75662C192.785 5.02642 193.437 5.44837 193.979 5.99363C194.477 6.51133 194.85 7.13588 195.071 7.81973C195.301 8.51543 195.418 9.24375 195.417 9.97668C195.42 10.6945 195.308 11.4081 195.086 12.0907C194.864 12.7636 194.502 13.3814 194.022 13.9028C193.49 14.4693 192.843 14.9154 192.124 15.2111C191.224 15.5696 190.26 15.7409 189.291 15.7144H187.363L195.847 19.2807V23.7384L183.883 18.3887V23.2205H179.858L179.857 17.3824Z" fill="#ED1C24" />
                <path d="M206.804 8.35182C206.708 8.35182 206.623 8.44841 206.545 8.63942L201.397 23.2203H197.141L202.95 6.91385C203.212 6.09509 203.751 5.39319 204.474 4.92922C205.204 4.51469 206.029 4.29675 206.868 4.29675C207.708 4.29675 208.533 4.51469 209.263 4.92922C209.979 5.39703 210.513 6.0981 210.772 6.91385L216.583 23.2203H212.327L207.15 8.63942C207.054 8.44769 206.977 8.35182 206.921 8.35182H206.804Z" fill="#ED1C24" />
                <path d="M77.9032 31.6058V32.8991H75.5164V41.3259H74.1649V32.8991H71.7636V31.605L77.9032 31.6058Z" fill="#231F20" />
                <path d="M83.4972 31.6345H84.9202V32.9142C84.7961 32.9048 84.6685 32.8978 84.5386 32.8925C84.4087 32.8872 84.2835 32.8856 84.1583 32.8856C84.005 32.8856 83.8506 32.8925 83.6985 32.9071C83.5439 32.9213 83.3919 32.9382 83.2374 32.9574C83.016 32.9962 82.7977 33.0514 82.5845 33.1225C82.3728 33.1925 82.1679 33.2816 81.9724 33.3887C81.8104 33.4741 81.6543 33.5702 81.505 33.6763C81.084 33.9669 80.7505 34.3672 80.5407 34.8338C80.4021 35.1273 80.3079 35.4399 80.2611 35.7611L84.9337 35.7471V37.012H80.2618C80.2768 37.6524 80.5045 38.2695 80.9089 38.7662C81.0425 38.9287 81.1864 39.0825 81.3395 39.2267C81.4949 39.3714 81.6633 39.5013 81.8428 39.6146C82.1574 39.7769 82.4907 39.9 82.8351 39.9814C83.1795 40.0631 83.5322 40.1041 83.886 40.1038L84.9346 40.0892V41.326H83.886L82.8645 41.2974C82.6151 41.2592 82.3696 41.199 82.1308 41.1177C81.8936 41.0368 81.6628 40.9382 81.4403 40.8228C81.2333 40.7195 81.0339 40.6018 80.8434 40.4706C80.6557 40.34 80.4759 40.1983 80.3052 40.0463C80.1208 39.853 79.9481 39.6489 79.788 39.4351C79.4938 39.054 79.2652 38.6264 79.1115 38.1701C79.0437 37.9705 78.9905 37.7663 78.9524 37.5589C78.9244 37.3672 78.901 37.1731 78.8822 36.9767C78.8622 36.7831 78.8521 36.5886 78.8517 36.3939C78.8517 36.2413 78.86 36.085 78.874 35.9266C78.8881 35.7682 78.9057 35.6124 78.9244 35.4593C79.0015 35.21 79.0905 34.9657 79.1911 34.7261C79.2918 34.4866 79.3996 34.247 79.5146 34.0072C79.6681 33.7576 79.846 33.524 80.0459 33.3098C80.2468 33.0942 80.4687 32.8992 80.7083 32.7275C80.9 32.6029 81.0966 32.483 81.298 32.368C81.4993 32.253 81.7053 32.1428 81.9159 32.0375C82.1677 31.9311 82.4275 31.8446 82.6929 31.7788C82.957 31.7122 83.2264 31.6687 83.498 31.6489L83.4972 31.6345Z" fill="#231F20" />
                <path d="M92.6561 31.6345V32.9141C92.6082 32.9141 92.5579 32.9118 92.5053 32.9071C92.4525 32.9024 92.4022 32.8995 92.3543 32.8995H92.0371C91.885 32.8995 91.7306 32.9048 91.5784 32.9141C91.4237 32.924 91.2698 32.9432 91.1174 32.9715C90.8804 32.9808 90.6458 33.0219 90.4198 33.0938C90.1914 33.1674 89.9682 33.2564 89.7517 33.36C89.5767 33.4383 89.4104 33.5347 89.2555 33.6476C89.0999 33.7609 88.9532 33.8859 88.8166 34.0215C88.6822 34.1569 88.5596 34.3038 88.4504 34.4603C88.3406 34.6158 88.2469 34.782 88.1708 34.9565C88.0835 35.1398 88.0111 35.3298 87.9542 35.5246C87.8981 35.7148 87.8593 35.9097 87.8383 36.1069C87.8191 36.2067 87.8051 36.3075 87.7963 36.4088C87.7869 36.5141 87.7823 36.62 87.7823 36.7253C87.7822 36.8216 87.7892 36.9177 87.8032 37.0129C87.8174 37.1088 87.8291 37.2095 87.8383 37.3149C87.8768 37.5144 87.9349 37.7096 88.0116 37.8976C88.0897 38.0863 88.186 38.2669 88.2992 38.4369C88.5188 38.7337 88.7695 39.0061 89.047 39.2496C89.3209 39.492 89.6254 39.6974 89.9527 39.8607C90.5622 40.0511 91.1971 40.1481 91.8356 40.1483C91.9713 40.1483 92.1071 40.1436 92.2463 40.1337C92.3855 40.1237 92.5219 40.1097 92.6559 40.0904V41.3273H91.6648L90.6869 41.3113C90.4338 41.2919 90.183 41.2486 89.938 41.182C89.6916 41.1158 89.4511 41.0293 89.219 40.9234C89.0165 40.8365 88.8216 40.733 88.6362 40.6138C88.4494 40.4935 88.2739 40.3564 88.1119 40.2043C87.9401 40.0707 87.781 39.9214 87.6369 39.7584C87.4925 39.5939 87.358 39.421 87.2343 39.2406C87.081 38.9908 86.9487 38.7288 86.8388 38.4571C86.7282 38.1827 86.6348 37.9017 86.5592 37.6157C86.5299 37.3191 86.5132 37.0244 86.509 36.7316C86.5047 36.4388 86.5117 36.1488 86.5299 35.8616C86.5677 35.6052 86.6279 35.3526 86.7097 35.1067C86.7922 34.8609 86.8955 34.6227 87.0186 34.3945C87.1532 34.1646 87.2944 33.9419 87.4423 33.7264C87.592 33.5104 87.7578 33.3061 87.9384 33.1152C88.0829 32.9522 88.2446 32.8053 88.4206 32.6769C88.5957 32.5489 88.7812 32.4358 88.9752 32.3387C89.2564 32.1879 89.5496 32.0605 89.8517 31.9578C90.1525 31.8563 90.4603 31.7769 90.7726 31.7203C90.9739 31.6822 91.1753 31.6536 91.3766 31.6342C91.5779 31.6149 91.7792 31.6054 91.9804 31.6056C92.0951 31.6056 92.2098 31.6079 92.3244 31.6127C92.4355 31.6171 92.5461 31.6292 92.6555 31.6486L92.6561 31.6345Z" fill="#231F20" />
                <path d="M95.632 31.6633V35.6896H99.874V31.6633H101.184V41.3263H99.8747V36.9691H95.6327V41.3263H94.2964V31.6633H95.632Z" fill="#231F20" />
                <path d="M104.231 31.5913C104.272 31.5912 104.313 31.5888 104.354 31.5842C104.394 31.5795 104.435 31.577 104.477 31.5767C104.542 31.5768 104.607 31.584 104.671 31.5984C104.732 31.613 104.797 31.6299 104.865 31.6486C104.958 31.6859 105.045 31.7368 105.123 31.7995C105.201 31.8628 105.273 31.9327 105.339 32.0084L109.078 39.4569H109.106V31.6633H110.386L110.358 40.5353C110.347 40.6412 110.323 40.7452 110.285 40.8448C110.247 40.9457 110.193 41.0402 110.126 41.1251C110.074 41.1884 110.011 41.2419 109.94 41.283C109.872 41.3219 109.799 41.351 109.724 41.3697C109.673 41.3894 109.62 41.4037 109.567 41.4123C109.51 41.4221 109.452 41.427 109.394 41.4269H109.307C109.278 41.4268 109.248 41.4219 109.22 41.4123C109.134 41.4027 109.048 41.3884 108.963 41.3697C108.88 41.3512 108.797 41.3272 108.717 41.2978C108.64 41.2483 108.569 41.1877 108.509 41.118C108.448 41.048 108.393 40.9735 108.344 40.8951L104.677 33.5467H104.619V41.3263H103.34V32.7563C103.359 32.5808 103.403 32.4089 103.469 32.2454C103.533 32.0809 103.631 31.9316 103.756 31.8072C103.827 31.7525 103.905 31.7066 103.987 31.6702C104.064 31.6366 104.146 31.6149 104.23 31.6059L104.231 31.5913Z" fill="#231F20" />
                <path d="M116.612 31.5626C116.66 31.5626 116.707 31.5602 116.755 31.5555C116.803 31.5508 116.856 31.548 116.913 31.548H117.201C117.278 31.548 117.354 31.5508 117.43 31.5555C117.506 31.5602 117.585 31.5626 117.662 31.5626C117.738 31.5719 117.814 31.5819 117.891 31.5912C117.969 31.601 118.045 31.6155 118.121 31.6345C118.368 31.6722 118.611 31.7323 118.848 31.8142C119.078 31.8937 119.302 31.9923 119.516 32.1091C119.763 32.2513 120.001 32.4098 120.227 32.5837C120.453 32.7559 120.663 32.9485 120.853 33.1589C121.157 33.4326 121.412 33.7559 121.608 34.115C121.804 34.4721 121.942 34.858 122.018 35.2583C122.057 35.4532 122.086 35.65 122.104 35.848C122.123 36.0493 122.134 36.2506 122.134 36.4518C122.133 36.7454 122.112 37.0385 122.069 37.3289C122.026 37.615 121.966 37.8983 121.889 38.1773C121.709 38.6628 121.457 39.1185 121.142 39.5289C120.826 39.9405 120.447 40.2997 120.02 40.5932C119.797 40.748 119.561 40.8827 119.315 40.9958C119.068 41.1099 118.814 41.206 118.553 41.2833C118.308 41.3321 118.061 41.3681 117.812 41.3912C117.561 41.4149 117.309 41.4172 117.058 41.3983C116.781 41.3884 116.505 41.3644 116.231 41.3264C115.955 41.2874 115.683 41.225 115.419 41.1398C115.14 41.0334 114.87 40.9034 114.613 40.7512C114.355 40.598 114.106 40.43 113.867 40.2479C113.567 39.9961 113.297 39.7115 113.061 39.3995C112.823 39.0871 112.62 38.7496 112.457 38.3929C112.372 38.1476 112.3 37.8982 112.24 37.6457C112.184 37.399 112.141 37.1493 112.112 36.8979C112.101 36.3943 112.157 35.8915 112.278 35.4024C112.396 34.9181 112.572 34.4497 112.802 34.0075C113.085 33.5621 113.431 33.16 113.829 32.8139C114.224 32.4712 114.661 32.1812 115.131 31.9511C115.368 31.8468 115.614 31.7626 115.866 31.6994C116.111 31.6379 116.36 31.597 116.612 31.5772L116.612 31.5626ZM116.511 32.7702C116.24 32.8291 115.975 32.9133 115.72 33.0219C115.465 33.13 115.224 33.2676 115.001 33.4321C114.733 33.6327 114.49 33.8643 114.276 34.1219C114.06 34.3806 113.878 34.6657 113.735 34.9703C113.64 35.229 113.57 35.4963 113.527 35.7684C113.484 36.0422 113.458 36.3183 113.448 36.5952C113.468 36.8671 113.511 37.1367 113.578 37.4008C113.644 37.6704 113.731 37.9348 113.836 38.1917C113.96 38.4406 114.112 38.6746 114.29 38.8891C114.464 39.1026 114.665 39.2935 114.887 39.4574C115.105 39.629 115.341 39.7761 115.591 39.8962C115.841 40.0166 116.101 40.1151 116.368 40.1905C116.499 40.2193 116.631 40.241 116.763 40.2554C116.894 40.2701 117.026 40.2773 117.158 40.277C117.234 40.277 117.306 40.2747 117.374 40.2701C117.442 40.2654 117.512 40.2581 117.59 40.2484C117.66 40.2481 117.73 40.2409 117.798 40.2268C117.87 40.2121 117.94 40.1958 118.007 40.1765C118.279 40.1113 118.544 40.0173 118.797 39.8962C119.047 39.7764 119.279 39.6241 119.488 39.4432C119.697 39.2621 119.89 39.0624 120.063 38.8465C120.235 38.6304 120.385 38.3966 120.508 38.1491C120.623 37.8981 120.71 37.6351 120.767 37.365C120.824 37.0981 120.848 36.8254 120.839 36.5528C120.839 35.993 120.722 35.4395 120.494 34.928C120.379 34.6784 120.237 34.442 120.071 34.2229C119.904 34.0049 119.708 33.8113 119.488 33.6478C119.297 33.4566 119.079 33.2944 118.841 33.1663C118.606 33.0387 118.354 32.9443 118.093 32.886C117.93 32.838 117.764 32.7995 117.597 32.7707C117.433 32.7425 117.267 32.7282 117.101 32.7279H116.957C116.908 32.728 116.86 32.7327 116.813 32.7421C116.76 32.7419 116.707 32.7468 116.655 32.7567L116.511 32.7853L116.511 32.7702Z" fill="#231F20" />
                <path d="M125.412 31.6633V38.3066C125.411 38.454 125.425 38.601 125.455 38.7454C125.484 38.8846 125.522 39.0214 125.571 39.155C125.625 39.2763 125.695 39.39 125.779 39.4932C125.879 39.6366 126.007 39.7584 126.155 39.851C126.304 39.9437 126.469 40.0054 126.642 40.0324C126.85 40.0903 127.066 40.1146 127.282 40.1043L128.719 40.0897V41.3266H127.123L126.605 41.2833C125.961 41.2094 125.357 40.9324 124.88 40.4924C124.785 40.3865 124.693 40.2767 124.607 40.1613C124.52 40.0459 124.439 39.9267 124.363 39.8019C124.304 39.6373 124.256 39.4692 124.218 39.2986C124.18 39.1233 124.156 38.9453 124.146 38.7662V31.6633H125.412Z" fill="#231F20" />
                <path d="M134.055 31.5626C134.102 31.5626 134.15 31.5602 134.198 31.5555C134.246 31.5508 134.298 31.548 134.357 31.548H134.644C134.72 31.548 134.797 31.5508 134.874 31.5555C134.951 31.5602 135.026 31.5626 135.104 31.5626C135.181 31.5719 135.258 31.5819 135.334 31.5912C135.412 31.6012 135.489 31.6157 135.565 31.6345C135.811 31.6725 136.054 31.7326 136.29 31.8142C136.521 31.8941 136.745 31.9927 136.959 32.1091C137.206 32.2521 137.444 32.4106 137.671 32.5837C137.896 32.7566 138.105 32.9491 138.296 33.1589C138.6 33.4329 138.855 33.7561 139.052 34.115C139.247 34.4726 139.385 34.8583 139.461 35.2583C139.499 35.45 139.528 35.6462 139.548 35.848C139.568 36.0498 139.576 36.2506 139.576 36.4518C139.577 36.7454 139.555 37.0387 139.511 37.329C139.468 37.6151 139.408 37.8985 139.332 38.1774C139.151 38.6628 138.899 39.1184 138.584 39.5289C138.268 39.9405 137.89 40.2997 137.463 40.5933C137.24 40.7473 137.004 40.882 136.758 40.9958C136.511 41.1097 136.256 41.2058 135.995 41.2834C135.751 41.332 135.504 41.368 135.256 41.3912C135.004 41.4149 134.751 41.4172 134.5 41.3983C134.223 41.3886 133.947 41.3646 133.673 41.3264C133.397 41.2878 133.126 41.2254 132.861 41.1398C132.582 41.0339 132.312 40.9038 132.056 40.7512C131.796 40.5981 131.546 40.43 131.307 40.2479C131.007 39.9961 130.737 39.7115 130.502 39.3995C130.265 39.0865 130.062 38.7491 129.898 38.3929C129.812 38.148 129.74 37.8985 129.682 37.6457C129.625 37.3991 129.581 37.1494 129.552 36.8979C129.542 36.3944 129.598 35.8917 129.717 35.4024C129.836 34.918 130.012 34.4497 130.243 34.0075C130.526 33.5618 130.872 33.1597 131.271 32.8139C131.666 32.471 132.103 32.1809 132.573 31.9511C133.042 31.7436 133.543 31.6172 134.054 31.5772L134.055 31.5626ZM133.954 32.7702C133.683 32.8286 133.418 32.9129 133.164 33.0219C132.909 33.13 132.667 33.2677 132.445 33.4321C132.177 33.6333 131.933 33.8648 131.718 34.1219C131.502 34.3803 131.322 34.6655 131.179 34.9703C131.083 35.2286 131.013 35.496 130.971 35.7684C130.927 36.042 130.901 36.3182 130.892 36.5952C130.911 36.867 130.954 37.1366 131.02 37.4009C131.088 37.6702 131.175 37.9345 131.28 38.1917C131.404 38.4409 131.556 38.6749 131.733 38.8891C131.907 39.1026 132.107 39.2934 132.329 39.4574C132.547 39.6285 132.784 39.7756 133.034 39.8962C133.284 40.0164 133.544 40.1148 133.81 40.1905C133.941 40.2191 134.073 40.2408 134.206 40.2555C134.337 40.27 134.469 40.2772 134.601 40.277C134.678 40.277 134.75 40.2747 134.817 40.2701C134.884 40.2654 134.956 40.2581 135.033 40.2484C135.103 40.2482 135.173 40.241 135.241 40.2268C135.313 40.2121 135.383 40.1958 135.45 40.1765C135.722 40.1111 135.988 40.0171 136.241 39.8962C136.49 39.7761 136.722 39.6238 136.931 39.4432C137.141 39.2625 137.333 39.0627 137.506 38.8465C137.679 38.6304 137.829 38.3966 137.953 38.1491C138.069 37.8984 138.155 37.6353 138.211 37.365C138.268 37.0983 138.292 36.8255 138.283 36.5528C138.283 35.993 138.165 35.4395 137.937 34.928C137.822 34.6783 137.679 34.4419 137.513 34.2229C137.347 34.0047 137.151 33.811 136.931 33.6478C136.74 33.4569 136.522 33.2948 136.284 33.1663C136.049 33.0386 135.797 32.9443 135.536 32.886C135.373 32.8379 135.208 32.7994 135.04 32.7707C134.876 32.7425 134.71 32.7282 134.544 32.7279H134.4C134.352 32.7279 134.304 32.7326 134.257 32.7421C134.204 32.7418 134.151 32.7467 134.098 32.7567C134.05 32.766 134.002 32.776 133.955 32.7853L133.954 32.7702Z" fill="#231F20" />
                <path d="M145.385 31.6059C145.518 31.6059 145.652 31.6037 145.781 31.5984C145.909 31.5931 146.042 31.5913 146.176 31.5913C146.3 31.5913 146.43 31.5936 146.564 31.5984C146.699 31.6032 146.828 31.6104 146.953 31.6199C147.162 31.6296 147.37 31.6634 147.571 31.7206C147.767 31.7764 147.959 31.8436 148.147 31.9219C148.421 32.045 148.687 32.1843 148.945 32.3391C149.199 32.4931 149.442 32.6662 149.67 32.8568C149.746 32.9224 149.818 32.9919 149.886 33.0652C149.953 33.1359 150.015 33.2103 150.073 33.2881L149.21 34.1939C149.104 34.0985 148.994 34.0002 148.88 33.899C148.765 33.7983 148.644 33.7007 148.52 33.6047C148.395 33.5181 148.271 33.4369 148.147 33.3601C148.023 33.2833 147.892 33.2114 147.758 33.1444C147.545 33.0382 147.32 32.9562 147.089 32.8999C146.856 32.8428 146.617 32.8091 146.377 32.7992C146.328 32.7897 146.277 32.785 146.226 32.7852H146.061C145.876 32.7852 145.69 32.7997 145.507 32.8284C145.318 32.8577 145.133 32.9059 144.954 32.9722C144.73 33.0406 144.515 33.1348 144.313 33.253C144.102 33.3764 143.902 33.5184 143.716 33.6772C143.534 33.832 143.365 34.0028 143.213 34.1874C143.06 34.3751 142.93 34.5803 142.826 34.7986C142.732 35.0325 142.655 35.2728 142.595 35.5175C142.537 35.7587 142.499 36.004 142.48 36.2513C142.471 36.4913 142.48 36.7317 142.509 36.9703C142.538 37.2113 142.596 37.4481 142.682 37.6753C142.76 37.8984 142.856 38.1148 142.969 38.3224C143.085 38.5354 143.22 38.7375 143.372 38.9262C143.523 39.1073 143.689 39.2756 143.868 39.4295C144.049 39.5861 144.244 39.7258 144.451 39.8468C144.666 39.9598 144.893 40.0513 145.126 40.12C145.356 40.1868 145.592 40.2301 145.831 40.2493C145.867 40.2492 145.903 40.2515 145.938 40.2564C145.974 40.2615 146.011 40.2638 146.047 40.2633C146.077 40.2735 146.108 40.2784 146.14 40.2779H146.248C146.334 40.2779 146.417 40.2757 146.499 40.271C146.584 40.2658 146.669 40.2538 146.752 40.235C146.836 40.226 146.92 40.2116 147.002 40.1918C147.084 40.1731 147.168 40.149 147.255 40.1199C147.483 40.0532 147.704 39.964 147.915 39.8536C148.126 39.7442 148.323 39.6115 148.505 39.4582C148.693 39.2992 148.865 39.1209 149.016 38.9262C149.162 38.7379 149.29 38.5357 149.396 38.3224C149.49 38.1377 149.56 37.9419 149.605 37.7397C149.649 37.5392 149.662 37.333 149.642 37.1285L146.305 37.1139V35.8479H150.978V37.5155C150.96 37.758 150.912 37.9972 150.834 38.2276C150.756 38.4576 150.66 38.6812 150.547 38.8964C150.452 39.1062 150.336 39.3061 150.201 39.4932C150.065 39.6827 149.917 39.8629 149.756 40.0324C149.572 40.2165 149.372 40.3848 149.16 40.5357C148.94 40.6914 148.707 40.8261 148.462 40.9382C148.249 41.0543 148.025 41.1485 147.793 41.2191C147.561 41.2904 147.322 41.3409 147.081 41.3701C147.05 41.3703 147.019 41.3726 146.988 41.377C146.957 41.3816 146.925 41.3839 146.894 41.3841C146.864 41.3939 146.832 41.3989 146.8 41.3987H146.708L145.285 41.3701C145.033 41.341 144.785 41.2878 144.544 41.2114C144.298 41.1339 144.059 41.0328 143.832 40.9096C143.591 40.7746 143.359 40.6257 143.135 40.4637C142.91 40.3015 142.7 40.1187 142.509 39.9177C142.318 39.7078 142.143 39.4843 141.985 39.2489C141.824 39.0089 141.682 38.7564 141.561 38.494C141.446 38.1696 141.352 37.8381 141.28 37.5016C141.208 37.1653 141.162 36.824 141.143 36.4806C141.191 36.0806 141.266 35.6843 141.367 35.2943C141.467 34.9068 141.589 34.5252 141.733 34.1516C141.855 33.888 142.007 33.6394 142.186 33.4109C142.363 33.1869 142.563 32.982 142.783 32.7998C142.956 32.6369 143.143 32.4902 143.343 32.3616C143.543 32.233 143.755 32.1246  143.976 32.038C144.201 31.9404 144.432 31.8564 144.667 31.7864C144.903 31.7152 145.143 31.6599 145.386 31.6208L145.385 31.6059Z" fill="#231F20" />
                <path d="M154.401 31.6633V41.3263H153.006V31.6633H154.401Z" fill="#231F20" />
                <path d="M160.67 31.6345H162.094V32.9142C161.97 32.9048 161.842 32.8978 161.712 32.8925C161.583 32.8872 161.457 32.8856 161.332 32.8856C161.179 32.8856 161.024 32.8925 160.872 32.9071C160.718 32.9213 160.566 32.9382 160.411 32.9574C160.19 32.9962 159.971 33.0514 159.758 33.1225C159.546 33.1925 159.342 33.2816 159.146 33.3887C158.984 33.4741 158.828 33.5702 158.679 33.6763C158.258 33.9669 157.924 34.3672 157.715 34.8338C157.576 35.1273 157.482 35.4399 157.435 35.7611L162.108 35.7471V37.012H157.435C157.45 37.6524 157.677 38.2696 158.082 38.7662C158.216 38.9287 158.359 39.0825 158.512 39.2267C158.668 39.3714 158.836 39.5013 159.016 39.6146C159.33 39.7769 159.664 39.9001 160.008 39.9814C160.352 40.063 160.705 40.1041 161.059 40.1038L162.107 40.0892V41.326H161.059L160.037 41.2974C159.788 41.2592 159.542 41.199 159.304 41.1177C159.066 41.0368 158.836 40.9382 158.613 40.8228C158.406 40.7195 158.207 40.6019 158.016 40.4706C157.829 40.3401 157.649 40.1984 157.478 40.0463C157.294 39.853 157.121 39.6489 156.961 39.4351C156.797 39.2204 156.653 38.9918 156.529 38.7521C156.435 38.5638 156.353 38.3693 156.285 38.1698C156.217 37.9703 156.164 37.766 156.126 37.5587C156.097 37.367 156.074 37.1729 156.055 36.9764C156.036 36.7828 156.025 36.5883 156.025 36.3937C156.025 36.241 156.033 36.0848 156.047 35.9264C156.061 35.768 156.079 35.6122 156.098 35.459C156.175 35.2098 156.264 34.9654 156.364 34.7259C156.465 34.4864 156.573 34.2467 156.687 34.0069C156.841 33.7573 157.019 33.5237 157.219 33.3095C157.42 33.0939 157.641 32.8989 157.881 32.7273C158.073 32.6026 158.269 32.4828 158.471 32.3678C158.672 32.2527 158.878 32.1426 159.089 32.0373C159.34 31.9308 159.6 31.8443 159.866 31.7786C160.13 31.7119 160.399 31.6685 160.671 31.6487L160.67 31.6345Z" fill="#231F20" />
                <path d="M169.342 31.6058V32.9288H165.833C165.737 32.948 165.643 32.9768 165.553 33.0148C165.463 33.0525 165.378 33.1008 165.3 33.1586C165.231 33.2086 165.168 33.2665 165.113 33.3311C165.055 33.3991 165.003 33.4712 164.956 33.5468C164.915 33.6191 164.883 33.6967 164.863 33.7774C164.838 33.8613 164.831 33.9492 164.84 34.036C164.85 34.1195 164.869 34.2015 164.898 34.2806C164.927 34.3573 164.961 34.4339 164.998 34.5105C165.065 34.6157 165.145 34.7123 165.236 34.7981C165.324 34.8825 165.423 34.955 165.531 35.0138L168.45 36.61C168.726 36.7901 168.973 37.0106 169.183 37.2641C169.393 37.517 169.563 37.8007 169.686 38.1054C169.705 38.2207 169.722 38.3354 169.738 38.4507C169.752 38.5699 169.759 38.69 169.759 38.8102V38.9687C169.759 38.9952 169.757 39.0217 169.752 39.0478C169.747 39.0738 169.744 39.1003 169.745 39.1267C169.717 39.3911 169.651 39.6502 169.55 39.8962C169.45 40.1405 169.317 40.3702 169.155 40.5792C168.984 40.7791 168.776 40.945 168.544 41.0684C168.308 41.1931 168.052 41.2757 167.788 41.3123C167.768 41.3225 167.746 41.3275 167.724 41.327H163.489V40.089H167.371C167.487 40.0792 167.601 40.0502 167.708 40.0029C167.817 39.9559 167.921 39.8981 168.018 39.8304C168.092 39.7847 168.158 39.7263 168.211 39.6577C168.264 39.5907 168.311 39.5184 168.349 39.442C168.368 39.3941 168.385 39.3462 168.398 39.2982C168.413 39.2517 168.421 39.2032 168.421 39.1544C168.43 39.1071 168.435 39.0589 168.435 39.0106V38.8668C168.425 38.7725 168.411 38.6788 168.392 38.586C168.373 38.4968 168.339 38.4116 168.291 38.3343C168.15 38.1156 167.964 37.9294 167.746 37.7879C167.217 37.4524 166.679 37.1288 166.134 36.8173C165.588 36.5057 165.032 36.2061 164.467 35.9185C164.258 35.7295 164.074 35.5146 163.92 35.279C163.767 35.0445 163.646 34.7906 163.561 34.5241C163.551 34.4662 163.543 34.4065 163.538 34.3443C163.534 34.2821 163.532 34.2173 163.532 34.151V34.0432C163.532 34.0067 163.537 33.9704 163.547 33.9353C163.547 33.904 163.549 33.8726 163.554 33.8416C163.559 33.8053 163.566 33.7693 163.575 33.7338C163.594 33.5981 163.62 33.4637 163.655 33.3311C163.687 33.1976 163.733 33.0675 163.79 32.9427C163.949 32.6992 164.14 32.479 164.359 32.2885C164.576 32.1003 164.821 31.9475 165.085 31.8357C165.229 31.7781 165.378 31.7323 165.531 31.6987C165.682 31.6655 165.836 31.644 165.99 31.6344L166.164 31.6057L169.342 31.6058Z" fill="#231F20" />
                <path d="M17.6733 42.7195L15.3212 38.1105L22.1061 34.6449C22.7854 34.3496 23.3987 33.9213 23.91 33.3853C24.4213 32.8493 24.8202 32.2164 25.0831 31.5239C25.2867 30.825 25.3453 30.0917 25.2551 29.3693C25.165 28.6468 24.928 27.9504 24.5589 27.3229L18.2975 15.0649L22.911 12.7098L29.1541 24.9345C29.8543 26.2566 30.3247 27.688 30.5455 29.1677C30.7504 30.4863 30.6477 31.8344 30.2453 33.1067C29.843 34.379 29.1519 35.541 28.2262 36.5021C27.1133 37.6561 25.8056 38.6049 24.3632 39.3048L17.6733 42.7195Z" fill="#ED1C24" />
                <path d="M6.27659 39.3048C4.83438 38.6046 3.52677 37.6558 2.41363 36.5021C1.48784 35.541 0.796781 34.379 0.394444 33.1067C-0.00789167 31.8344 -0.11061 30.4863 0.0943111 29.1677C0.315504 27.688 0.786374 26.2565 1.48685 24.9345L7.73002 12.7098L12.3419 15.0649L6.08247 27.3235C5.71304 27.9509 5.47595 28.6473 5.38579 29.3698C5.29563 30.0923 5.3543 30.8256 5.55821 31.5245C5.82078 32.2172 6.21948 32.8503 6.73079 33.3863C7.24209 33.9224 7.85562 34.3505 8.53515 34.6455L15.3213 38.1111L12.968 42.7201L6.27659 39.3048Z" fill="#231F20" />
                <path fillRule="evenodd"  clipRule="evenodd" d="M21.6696 0C20.3729 2.57564 21.2382 4.61707 22.5332 6.6597C23.2404 7.61808 23.6128 8.78245 23.5929 9.97334C23.573 11.1642 23.162 12.3155 22.4232 13.2498C21.5332 14.3589 20.4301 15.2786 19.179 15.9547C17.9279 16.6308 16.5541 17.0496 15.1386 17.1864C15.6453 16.3451 15.9261 15.8219 16.262 15.3291C17.0643 14.1657 17.5927 12.8358 17.8075 11.4391C18.0224 10.0424 17.918 8.61513 17.5024 7.26448C16.5147 3.47796 17.7423 1.31945 21.6696 0Z" fill="#231F20" />
                <path fillRule="evenodd"  clipRule="evenodd" d="M8.35493 0C9.6503 2.57564 8.78632 4.61707 7.49119 6.6597C6.78401 7.61808 6.41166 8.78245 6.43154 9.97334C6.45142 11.1642 6.86242 12.3155 7.60119 13.2498C8.49115 14.359 9.59421 15.2788 10.8453 15.9549C12.0964 16.631 13.4703 17.0498 14.8858 17.1864C14.3792 16.3451 14.0971 15.8219 13.7613 15.3291C12.9592 14.1657 12.431 12.8357 12.2163 11.439C12.0017 10.0422 12.1062 8.61504 12.522 7.26448C13.5109 3.47796 12.2809 1.31945 8.35493 0Z" fill="#ED1C24" />
                <path d="M36.6554 27.234H217" stroke="#ED1C24" strokeWidth="0.5" strokeMiterlimit="10" />
              </g>
              <defs>
                <clipPath id="clip0_534_376">
                  <rect width="217" height="42.7194" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">


            </Nav>
            <Nav>
              <NavLink  to="/" className="home" activeClassName="active">
                <li>Home</li>
              </NavLink >
              <NavLink  to="/services" className="services" activeClassName="active">
                <li>Services</li>
              </NavLink >
              <NavLink  to="/about" className="about" activeClassName="active">
                <li>About</li>
              </NavLink >
              <NavLink  to="/contact" className="contact" activeClassName="active">
                <li>Contact</li>
              </NavLink >
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default NavbarTab
