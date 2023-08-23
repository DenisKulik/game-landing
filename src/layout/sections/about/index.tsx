import {
    AboutHeading,
    StyledAbout,
    Video,
    VideoInfo,
    VideoTitle,
    VideoWrapper,
} from 'layout/sections/about/about.styles.ts'
import { Button } from 'components/common/button'
import trailer from 'assets/videos/trailer.mp4'
import poster from 'assets/img/bg-video.webp'

export const About = () => {
    return (
        <StyledAbout>
            <AboutHeading>About Game</AboutHeading>
            <VideoWrapper>
                <VideoInfo>
                    <VideoTitle>Watch the Trailer</VideoTitle>
                    <Button title="play" color="dark" />
                </VideoInfo>
                <Video src={trailer} poster={poster}></Video>
            </VideoWrapper>
        </StyledAbout>
    )
}
