import styled from 'styled-components'

const EditionCard = styled.div`
    padding: 1.7rem;
    border-radius: 6px;
    background: linear-gradient(180deg, #141615 0%, ${({ theme }) => theme.colors.background} 100%);

    & > button {
        margin-left: auto;
    }
`

const Image = styled.img`
    margin-bottom: 2rem;
    border-radius: 6px;
    object-fit: cover;
`

const Title = styled.h3`
    margin-bottom: 1.5rem;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
`

const Subtitle = styled.div`
    margin-bottom: 3rem;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.sea};
`

const Info = styled.ul`
    margin-bottom: 0.6rem;
    list-style: none;
`

const InfoItem = styled.li`
    color: ${({ theme }) => theme.colors.grey};
    font-size: 1.4rem;

    &:not(:last-child) {
        margin-bottom: 1.2rem;
    }
`

const Price = styled.div`
    margin-bottom: 1.4rem;
    text-align: right;
    font-size: 1.9rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
`

export const S = {
    EditionCard,
    Image,
    Title,
    Subtitle,
    Info,
    InfoItem,
    Price,
}
