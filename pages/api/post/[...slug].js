export default (req, res) => {
    const {
        query: { slug },
    } = req

    console.log(res)
    console.log(req)
    res.end(`Slug: ${slug.join(', ')}`)
}
