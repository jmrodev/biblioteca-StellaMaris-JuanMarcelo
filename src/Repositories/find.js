import Schema from '../Models/ClientSchema.js'
import prompt from '../utils/prompt.js'


const test = async () => {
  try {
    console.log(await Schema.find({  }))
  } catch (error) {
    console.error('Error finding users:', error);
  }
}

export default test;
