import Schema from '../Models/ClientSchema.js'
import prompt from '../utils/prompt.js'


const test = async () => {
  //parsear a numero
  let id = parseInt(prompt("teclea id"))

// funciona
  // Schema.update({_id:1},{username:"pedro"}).save()
//funciona
// console.log(Schema.findOne({_id:1}));
// funciona
 let data =Schema.findOne({_id: id})
 console.log(data);
 


}

export default test;
