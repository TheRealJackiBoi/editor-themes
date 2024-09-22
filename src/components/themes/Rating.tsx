import { Star } from "lucide-react"

const Rating = ({rating = 0}: {rating: number}) => {
return (

                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{rating}</span>
                      </div>
)
}

export default Rating
