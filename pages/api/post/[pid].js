export default (req, res) => {
    const {
        query: { pid },
    } = req

    res.end(`Post: ${pid}`)
    res.status(200).json({ name: 'Next.js' })
}
