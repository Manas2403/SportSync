import {model,Schema} from "mongoose"
const CourtSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    centerSportId:{
        type: Schema.Types.ObjectId,
        ref: "CenterSports"
    }
},{
    timestamps:true
})
const Court = model("Court",CourtSchema)
export default Court