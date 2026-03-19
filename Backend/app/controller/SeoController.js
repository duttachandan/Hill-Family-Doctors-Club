

class SeoController {
    async seoModel(req, res) {
        const { name } = req.params;
        const { heading1, heading2, paragraph } = req.body;
        res.json({
            name,
            heading1,
            heading2,
            paragraph
        });
    }
}

module.exports = new SeoController();