const logout = (req, res) => {

    res.status(200).json({
        success: "OK",
        message: "User successful logout"
      })

}

module.exports = logout;