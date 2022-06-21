
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

  const datos= req.body;
  console.log(datos);
  req.getConnection((err,conn) =>{
    conn.query('INSERT INTO tbalbums set ?',[datos],(err,album) => {
      console.log(album);
      res.redirect('/');
      //58:16
    });
  });

  };





module.exports = controller;
