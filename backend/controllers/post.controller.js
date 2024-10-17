const PostModel = require ("../models/post.model");

setPosts = async(req,res)=>{
    res.json({message :  'requete post enregistrer'});

    if(!req.body.message){
        res.status(400).json({message : "Veuillez ajouter un message"});
    }
    const post = await PostModel.create({
        message :req.body.message,
        author :req.body.author,
    })
    res.status(200).json(post);
}; 

module.exports = {setPosts}