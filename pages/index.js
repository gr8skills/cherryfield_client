import React, { useRef, useState, useEffect } from "react";

import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import { Carousel } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import Slider from "react-slick";

import classes from "../styles/Home.module.css";
import { articleContent, galleryImages, slideImages } from "../misc/data";

import { MdArrowBack } from "@react-icons/all-files/md/MdArrowBack";
import { MdArrowForward } from "@react-icons/all-files/md/MdArrowForward";
import ButtonClear from "../components/ui/buttons/button-clear";
import ExploreCard from "../components/ui/cards/explore-card";
import ArticleCard from "../components/ui/cards/article-card";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import MoveToTop from "../components/move-to-top";

import ExploreImage1 from "/public/assets/images/explore-img-1.jpg";
import ExploreImage2 from "/public/assets/images/explore-img-2.jpg";

import ArticleBanner1 from "/public/assets/images/img_7-sm.jpg";
import ArticleBanner2 from "/public/assets/images/img_8-sm.jpg";

import Navbar from "../components/layouts/navbar";
import Footer from "../components/layouts/footer";
import StickyButtonsGroup from "../components/sticky-buttons-group";
import ButtonToTop from "../components/ui/buttons/back-to-top";
import useWindowSize from "../hooks/use-window-size";
import useSWR from "swr";
import { serverUrl } from "../helpers/api";
import {api} from "../misc/apis";

const sliderInit = (width) => {
  if (width < 700) return 1;
  if (width >= 700 && width < 1050) return 3;
  if (width >= 1050 && width < 1400) return 4;
  if (width >= 1400) return 5;
  return 1;
};

export default function Home() {
  const { data: slideBanners, error } = useSWR(`${serverUrl}/api/slide-images`);
  const slickRef = useRef(null);
  const { width } = useWindowSize();
  const router = useRouter();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const slickConfig = {
    autoPlay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: sliderInit(width),
    slidesToScroll: 1,
  };

  const next = () => slickRef.current.slickNext();
  const prev = () => slickRef.current.slickPrev();

  const { data: settings, errorSettings } = useSWR(`${serverUrl}/api/site-settings`);
  const { data: fetchNews, errorNews } = useSWR(`${serverUrl}/api/news`);
  const news = fetchNews?fetchNews.data:'';


  console.log("news: ", news);

  return (
    <main>
      <Navbar />
      <section className={classes["app-carousel-container"]}>
        <Carousel controls={false}>
          {slideBanners?.map((slide) => (
            <Carousel.Item key={slide.id.toString()}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${serverUrl}/images/${slide.image_path}`}
                  alt={""}
                  className={classes["app-carousel-container__image-sm"]}
                />
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      <section
        className={
          "my-4 container-fluid d-flex flex-column align-items-center justify-content-start"
        }
      >
        <div className={"page-main-heading-section mt-2"}>
          <h2>Welcome to the {settings?.display_name}</h2>
        </div>

        <p className={classes["intro-block"]}>
          <span dangerouslySetInnerHTML={{__html: settings?.welcome_message}}/>
        </p>

        <div className={"py-4"}>
          <ButtonClear
            className={classes["more-button"]}
            onClick={(_) => router.push("/about/principal-desk")}
          >
            Read more from {settings?.school_principal} | The school head
          </ButtonClear>
        </div>
      </section>

      <section
        className={`${classes["darkened"]} px-0 my-5 py-4
                    container-fluid d-flex flex-column align-items-center justify-content-start`}
      >
        <div className={"page-sub-heading-section mb-3"}>
          <h3>Explore More</h3>
        </div>

        <div className={classes["explore-more-wrapper"]}>
          <ExploreCard
            image={ExploreImage1}
            title={"Junior Secondary"}
            subtitle={"JSS1 to JSS3"}
          />

          <ExploreCard
            image={ExploreImage2}
            title={"Senior Secondary"}
            subtitle={"SS1 - SS3"}
          />
        </div>
      </section>

      <section
        className={`${classes["darkened"]} my-5 py-2
                    container-fluid d-flex flex-column align-items-center justify-content-start`}
        style={{ position: "relative" }}
      >
        <div className={"page-sub-heading-section mb-0"}>
          <h3>School News and Activities</h3>
        </div>

        <Row className={`${classes["news-activities-content"]} mt-2 pt-4`}>
          <Col sm={12} md={4} className={"mb-3"}>
            <h3 className={`${classes["section-header"]} mb-3`}>
              News and Stories
            </h3>
            <Card className={"text-center"}>
              <Card.Body
                className={`d-flex flex-column align-items-center py-5`}
              >
                {news && news?.length > 0 && (
                    news.slice(0,5).map((single, index)=> (
                <>
                  <p className={classes["news-story-date"]}>{single.pretty_date}</p>
                  <Link href={"/media/news-events"}>
                    <h4
                      className={classes["news-story-headline"]}
                      style={{ cursor: "pointer" }}
                    >
                      <a href={`/news/${single.slug}`} className={`text-muted`}>{single.title}</a>
                    </h4>
                  </Link>
                  <hr className={classes["news-story-demacator"]} />
                </>
                    ))
                )}
                {news && news?.length > 5 && (
                  <div className={"my-5"}>
                    <ButtonClear
                      className={classes["more-button"]}
                      onClick={(_) => router.push("/media/news-events")}
                    >
                      More NEWS
                    </ButtonClear>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={8}>
            <h3 className={`${classes["section-header"]} mb-3`}>
              Articles and Blog posts
            </h3>
            <div className={`d-sm-none d-md-block mr-auto`}>
              {news && news?.length > 0 && (
                  news.slice(0,3).map((single, index)=> (
                    <ArticleCard horizontal={true} key={single?.id}
                                 image={`${serverUrl}/images/${single?.thumb}`}
                                 content={single?.excerpt}
                                 author={'School Admin'}
                                 slug={single?.slug}
                                 date={new Date(single?.created_at).toDateString()}/>
                  ))
              )}
              {/*<ArticleCard key={single.id.toString()}*/}
              {/*        horizontal={true}*/}
              {/*                   image={`url(http://127.0.0.1:8000/images/LUCW9J2u5VqDyJV0lvnb14MLgvwnUjXP8TIcUGtD.jpg)`}*/}
              {/*        // image={ArticleBanner1}*/}
              {/*        // image={`${serverUrl}/images/${single.thumb}`}*/}
              {/*        content={single.content}*/}
              {/*        author={"School Admin"}*/}
              {/*        date={single.pretty_date}*/}
              {/*      />*/}

            </div>
            {/*<Row className={`mt-5`}>*/}
            {/*    <Col sm={12} md={6} className={'mb-5'}>*/}
            {/*        <ArticleCard image={ArticleBanner2}*/}
            {/*                     content={articleContent}*/}
            {/*                     author={'Justus Ali JSS 3'}*/}
            {/*                     date={'2 July, 2021'}/>*/}
            {/*    </Col>*/}

            {/*    <Col sm={12} md={6}>*/}
            {/*        <ArticleCard image={ArticleBanner1}*/}
            {/*                     content={articleContent}*/}
            {/*                     author={'Justus Ali JSS 3'}*/}
            {/*                     date={'2 July, 2021'}*/}
            {/*        />*/}
            {/*    </Col>*/}

            {/*</Row>*/}

            <div className={"text-center mt-5"}>
              <ButtonClear
                className={classes["more-button"]}
                onClick={(_) => router.push("/media/blog")}
              >
                View All
              </ButtonClear>
            </div>
          </Col>
        </Row>

        <div className={classes["float-box"]}>&nbsp;</div>
      </section>

      <section
        className={
          "mt-5 px-0 mb-2 container-fluid d-flex flex-column align-items-center justify-content-start"
        }
      >
        <div className={"page-sub-heading-section mb-3"}>
          <h3>Gallery</h3>
        </div>

        <div
          style={{ width: "100%" }}
          className={`${classes["gallery-content"]} mt-3`}
        >
          <div>
            <Slider {...slickConfig} ref={slickRef}>
              {galleryImages.slice(0, 6).map((image, idx) => (
                <div className={classes["gallery-card"]} key={idx}>
                  <Image alt={""} src={image} width={200} height={200} />
                </div>
              ))}
            </Slider>
            <button className={classes["slide-nav-arrow-left"]} onClick={prev}>
              <MdArrowBack />
            </button>

            <button className={classes["slide-nav-arrow-right"]} onClick={next}>
              <MdArrowForward />
            </button>
          </div>
        </div>
      </section>

      {/*<section*/}
      {/*    className={'px-0 mt-5 container-fluid d-flex flex-column align-items-center justify-content-start'}>*/}
      {/*  <div className={'page-sub-heading-section mb-3'}>*/}
      {/*    <h3>Class of 2020 Universities</h3>*/}
      {/*  </div>*/}

      {/*  <Image src={AffiliationClass} alt={''}/>*/}
      {/*</section>*/}

      {isGalleryOpen && (
        <Lightbox
          mainSrc={galleryImages[photoIndex]["src"]}
          nextSrc={
            galleryImages[(photoIndex + 1) % galleryImages.length]["src"]
          }
          prevSrc={
            galleryImages[
              (photoIndex + galleryImages.length - 1) % galleryImages.length
            ]["src"]
          }
          onCloseRequest={() => setIsGalleryOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + galleryImages.length - 1) % galleryImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % galleryImages.length)
          }
        />
      )}

      <Footer />
      <StickyButtonsGroup />
      <ButtonToTop />
      <MoveToTop />
    </main>
  );
}
