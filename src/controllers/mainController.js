module.exports = {
    index: (req,res) => {
        
        res.render('index')
        
    },
    login:(req,res)=>{
        let usuario = req.query.user;
        
        res.render("indexUser",{
            usuario
        })
    },

    admin: (req, res)=>{
        
        let usuario = req.query.user;
        
        res.render("indexAdmin",{
            usuario
        })
    }
}