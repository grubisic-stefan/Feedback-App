import Card from "./shared/Card"
import PropTypes from 'prop-types'
import { FaTimes} from 'react-icons/fa'

function ItemFeedback({item, handleDelete}) {
     
    
  return (
    <Card >
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={()=>handleDelete(item.id)}><FaTimes color='purple'/></button>
      <div className="text-dispaly">{item.text}</div>
    </Card>
  )
}
ItemFeedback.propTypes={
    item: PropTypes.object.isRequired,
}
export default ItemFeedback