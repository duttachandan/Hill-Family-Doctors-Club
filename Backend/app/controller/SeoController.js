

class SeoController {
    async seoModel(req, res) {
        const { name } = req.params;
        const { heading1, heading2, paragraph } = req.body;
        const { path } = req.file;
        console.log(req.file)
        res.json({
            name,
            heading1,
            heading2,
            paragraph,
            path
        });
    }
}

module.exports = new SeoController();