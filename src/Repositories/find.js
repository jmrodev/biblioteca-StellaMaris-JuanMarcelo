import Schema from '../Models/ClientSchema.js'


const test = async () => {
    Schema.update({_id:1},{username:"pedro"}).save()
}

export default test;
