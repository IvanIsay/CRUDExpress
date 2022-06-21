
const controller= {};

controller.list = (req,res) => {
  req.getConnection((err,conn) =>{
    conn.query('Select * from tbalbums', (err,albums) => {
      if(err){
        res.json(err);
      }
      console.log(albums);
      res.render('albumsview.ejs',{data:albums});

    });
  });
};


controller.save = (req,res) => {
  console.log(req.body);
  res.send('works')

  };





module.exports = controller;
