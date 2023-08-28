import { useRef, useState } from 'react'
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
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement | null>(null)

    const onPlayPauseVideo = () => {
        const video = videoRef.current as HTMLVideoElement

        if (video) {
            isVideoPlaying ? video.pause() : video.play()
            setIsVideoPlaying(!isVideoPlaying)
        }
    }

    return (
        <StyledAbout>
            <AboutHeading>About Game</AboutHeading>
            <VideoWrapper playing={isVideoPlaying ? isVideoPlaying.toString() : ''}>
                <VideoInfo>
                    <VideoTitle>Watch the Trailer</VideoTitle>
                    <Button
                        onClick={onPlayPauseVideo}
                        title={isVideoPlaying ? 'pause' : 'play'}
                        color="dark"
                    />
                </VideoInfo>
                <Video ref={videoRef} src={trailer} poster={poster}></Video>
            </VideoWrapper>
        </StyledAbout>
    )
}
