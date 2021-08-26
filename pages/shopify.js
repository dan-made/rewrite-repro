const Page = () => <></>

export const getServerSideProps = async ({ req }) => {
    console.log('shopify')
    console.log(req.headers)

    return {
        props: {
            key: 'value',
        }
    }
}

export default Page
