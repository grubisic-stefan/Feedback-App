import { motion, AnimatePresence } from 'framer-motion'
import ItemFeedback from './ItemFeedback'
import SpinnerGif from './shared/SpinnerGif'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
    const { feedback, isLoading } = useContext(FeedbackContext)

    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No feedback yet</p>

    }

    return isLoading ? (
        <SpinnerGif />) :
        (<div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <ItemFeedback
                            key={item.id}
                            item={item}
                        ></ItemFeedback>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>)




    //   return (
    //     <div className='feedback-list'>
    //         {feedback.map((item)=>(
    //             <ItemFeedback key={item.id} item={item} handleDelete={handleDelete}></ItemFeedback>
    //         ))}
    //     </div>
    //   )
}

export default FeedbackList
