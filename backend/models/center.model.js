import {model,Schema} from "mongoose"
const centerSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    sports:[
        {
            type: Schema.Types.ObjectId,
            ref: "Sport"
        }
    ]
},{
    timestamps:true
})
const Center = model("Center",centerSchema)
export default Center