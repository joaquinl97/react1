import './main.css'


import { Carousel } from "react-bootstrap";

function Main() {


    return (

        <div className=' text-dark'>
            {/* HTML */}
            <Carousel fade className='carouselContainer'>
                <Carousel.Item className='containerCarouselImg'>
                    <img
                        className="d-block w-100 carouselImg"
                        src="https://www.sneakerhdwallpapers.com/wallpapers/2022/air-jordan-1-low-travis-scott-reverse-mocha-wallpaper-preview.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className='carouselCaptionContainer'>
                        <h3 className='caption1Carousel' >Jordan 1 Low x Travis Scott</h3>
                        <p className='caption2Carousel'>Reverse Mocha</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='containerCarouselImg'>
                    <img
                        className="d-block w-100 carouselImg"
                        src="https://www.sneakerhdwallpapers.com/wallpapers/2022/air-jordan-7-trophy-room-wallpaper-preview.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className='caption1Carousel'>Jordan 7</h3>
                        <p className='caption2Carousel'>
                            Trophy Room
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="container text-center mt-5">
                <h3>REACT Sneakers</h3>
                <p className='text-secondary'>We love hype!</p>
                <p className='text-secondary'>Tienda lider de venta de productos hype en Argentina.</p>
            </div>

            <div className="row container-fluid text-center mt-5">
                <div className="col-sm-4 p-0">
                    <p className='m-0'><strong>Travis Scott</strong></p>
                    <p className='m-0'>Founder</p>
                    <img className='creatorsImg' src="https://pyxis.nymag.com/v1/imgs/7a2/465/d29451e1b8a3df500dd64ca4a3c7d2742f-03-travis-scott.rsquare.w600.jpg" alt="Random Name" />
                </div>
                <div className="col-sm-4 p-0">
                    <p className='m-0'><strong>Kanye West</strong></p>
                    <p className='m-0'>Co-Founder</p>
                    <img className='creatorsImg' src="https://static.gigwise.com/artists/kanye_tlop_review_feat_750.jpg" alt="Random Name" />
                </div>
                <div className="col-sm-4 p-0">
                    <p className='m-0'><strong>Walter Esteban Rivas</strong></p>
                    <p className='m-0'>CEO</p>
                    <img className='creatorsImg' src="https://media-exp1.licdn.com/dms/image/C4D03AQHQKSDj8TQbAA/profile-displayphoto-shrink_200_200/0/1574084167807?e=2147483647&v=beta&t=Q1e4rcshojmXw7sIgu6UClCmah8B9l02CX1cEkGR2Yw" alt="Random Name" />
                </div>
            </div>







    
        </div>
        

    );

}
export default Main;