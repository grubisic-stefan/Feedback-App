import { motion, AnimatePresence } from 'framer-motion'
import ItemFeedback from './ItemFeedback'
import PropTypes from 'prop-types'

function FeedbackList({ feedback, handleDelete }) {

    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>

    }
    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div 
                    key={item.id}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    >
                        <ItemFeedback
                            key={item.id}
                            item={item}
                            handleDelete={handleDelete}></ItemFeedback>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )



    //   return (
    //     <div className='feedback-list'>
    //         {feedback.map((item)=>(
    //             <ItemFeedback key={item.id} item={item} handleDelete={handleDelete}></ItemFeedback>
    //         ))}
    //     </div>
    //   )
}
FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            // id: PropTypes.number.isRequired, zbog uuidv4
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}
export default FeedbackList
