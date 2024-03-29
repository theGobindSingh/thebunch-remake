import { PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import {
  bannerHeadingCss,
  bannerContainerCss,
  boldDetailSpanCss,
  costContainerCss,
  detailsContainerCss,
  headerDetailsWrapperCss,
  costWrapperCss,
  textContainerCss,
  bannerImgContainerCss
} from "@components/banner-page-wrapper/styles";
import { BannerPageWrapperProps } from "@components/banner-page-wrapper/types";
import FullWidthWrapper from "@components/full-width-wrapper";
import PageWrapper from "@components/page-wrapper";

export default function BannerPageWrapper(props: PropsWithChildren<BannerPageWrapperProps>) {
  const { pageName, heading, children, bannerDetails, img, secondChild, className, bottomBar, pageMeta } = props;
  const { cost = 0, link = "", buttonText = "Request an invite" } = bottomBar ?? {};

  const dateObj = bannerDetails?.date ?? new Date();

  const costElem = bottomBar && (
    <FullWidthWrapper css={costContainerCss} wrapperCss={costWrapperCss}>
      <span className="cost-span">
        <b>Rs. {cost}</b>
        <span> / Person</span>
      </span>
      <Link href={link} className="invite-cta" target="_blank" rel="noopener noreferrer">
        {buttonText}
      </Link>
    </FullWidthWrapper>
  );

  const bannerDetailsElem = bannerDetails && (
    <div css={headerDetailsWrapperCss}>
      <span css={detailsContainerCss} className="banner-date">
        <span css={boldDetailSpanCss} suppressHydrationWarning>
          {format(dateObj, "dd MMM")}
        </span>
        <span suppressHydrationWarning>{format(dateObj, "yyyy")}</span>
      </span>
      <span css={detailsContainerCss} className="banner-venue">
        <span css={boldDetailSpanCss} suppressHydrationWarning>
          {format(dateObj, "hh:mm a")}
        </span>
        <span>{bannerDetails.location}</span>
      </span>
    </div>
  );

  return (
    <PageWrapper name={pageName} meta={pageMeta}>
      <FullWidthWrapper css={bannerContainerCss}>
        <div css={bannerImgContainerCss}>
          <Image src={img.src} alt={img.alt} sizes="100%" fill priority />
          {bannerDetailsElem}
        </div>
        <h1 css={bannerHeadingCss}>{heading}</h1>
      </FullWidthWrapper>
      <FullWidthWrapper className={className} css={textContainerCss}>
        {children}
        {secondChild}
      </FullWidthWrapper>
      {costElem}
    </PageWrapper>
  );
}
