import { useRef, useState } from 'react'
import { Zoom } from 'react-awesome-reveal'

import { S } from 'layout/sections/about/about.styles.ts'
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
        <S.About id="about">
            <Zoom duration={500} triggerOnce={true}>
                <S.AboutHeading>About Game</S.AboutHeading>
                <S.VideoWrapper playing={isVideoPlaying ? isVideoPlaying.toString() : ''}>
                    <S.VideoInfo>
                        <S.VideoTitle>Watch the Trailer</S.VideoTitle>
                        <Button
                            onClick={onPlayPauseVideo}
                            title={isVideoPlaying ? 'pause' : 'play'}
                            color="dark"
                        />
                    </S.VideoInfo>
                    <S.Video ref={videoRef} src={trailer} poster={poster}></S.Video>
                </S.VideoWrapper>
            </Zoom>
        </S.About>
    )
}
