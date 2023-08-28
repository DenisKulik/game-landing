import styled, { css } from 'styled-components'
import { SectionHeading } from 'components/common/section-heading'

type VideoProps = {
    playing?: string
}

export const StyledAbout = styled.section`
    padding-top: 6rem;
`
export const AboutHeading = styled(SectionHeading)`
    margin-bottom: 3.2rem;
`

export const VideoWrapper = styled.div<VideoProps>`
    position: relative;

    ${({ playing }) =>
        playing &&
        css`
            ${VideoInfo} {
                opacity: 0;
                &:hover {
                    opacity: 1;
                }
            }
        `}
`

export const VideoInfo = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);

    & > button {
        margin: 0 auto;
    }
`

export const VideoTitle = styled.div`
    margin-bottom: 2.9rem;
    font-size: 5rem;
    font-weight: 500;
    line-height: 3.9rem;
`

export const Video = styled.video`
    width: 100%;
    height: auto;
`
