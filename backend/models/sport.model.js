import {model,Schema} from "mongoose"
const SportSchema = new Schema({
    name: {
        type: String,
        required:true
    },
},{
    timestamps:true
})
const Sport = model("Sport",SportSchema)
export default Sport