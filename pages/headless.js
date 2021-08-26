const Page = () => <></>

export const getServerSideProps = async ({ req }) => {
    console.log('headless')
    console.log(req.headers)

    return {
        props: {
            key: 'value',
        }
    }
}

export default Page
