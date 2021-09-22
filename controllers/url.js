const models = require('../models')
const url = require('../utils/urlService')

exports.longUrl = async (req, res) => {
    const { longUrl } = req.body;
    const userId = req.userData.id;
    const shortUrl = url.createShortLink(8);
    const createUrl = await models.Url.create({ longUrl: longUrl, userId: userId,shortUrl: shortUrl })
    return res.status(200).json({message: "url created",createUrl:createUrl
    })
}

exports.shortUrl = async (req, res) => {
    const { shortUrl } = req.params;
    const checkUrl = await models.Url.findOne({
        where: {
            shortUrl: shortUrl
        }
    })
    console.log(checkUrl)
    if (!checkUrl) {
        return res.status(404).json({ message: "Invalid URL" })
    }
    console.log(checkUrl.longUrl)
    res.redirect(`${checkUrl.longUrl}`)
}


