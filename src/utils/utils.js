import { toast } from 'react-toastify'
import { auth } from '../firebase'
import firebase from 'firebase/app'

const add = (list, course, user) => {
  let contains = false

  list.forEach((item) => {
    if (item.id === course.id) {
      contains = true
    }
  })

  if (auth.currentUser) {
    if (!contains) {
      toast('Added to cart')
      list.push(course)
      user.update({
        cartItems: firebase.firestore.FieldValue.arrayUnion(course),
      })
    } else {
      toast.error('This course is already added')
    }
  } else {
    toast.error('Please log in to add a course')
  }
}

const remove = (user, list, id, item) => {
  user.update({
    cartItems: firebase.firestore.FieldValue.arrayRemove(item),
  })
  return list.filter((course) => course.id !== id)
}

const search = (courses, initialSearch, searchParam) => {
  return courses.filter((course) => {
    return searchParam.some((item) => {
      return (
        course[item]
          .toString()
          .toLowerCase()
          .indexOf(initialSearch.toLowerCase()) > -1
      )
    })
  })
}

export { add, remove, search }
