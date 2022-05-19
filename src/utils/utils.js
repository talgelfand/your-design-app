import { toast } from "react-toastify"
import { auth } from "../firebase"
import firebase from "firebase/app"

const add = (list, myCourses, course, user) => {
  let contains = false
  let myCourse = false

  list.forEach((item) => {
    if (item.id === course.id) {
      contains = true
    }
  })

  myCourses.forEach((item) => {
    if (item.id === course.id) {
      myCourse = true
    }
  })

  if (auth.currentUser) {
    if (!contains && !myCourse) {
      const listName =
        course.list === "wishlist" ? "wishlistItems" : "cartItems"
      toast(`Added to ${course.list}`)
      list.push(course)
      user.update({
        [listName]: firebase.firestore.FieldValue.arrayUnion(course),
      })
    } else {
      toast.error("This course is already added")
    }
  } else {
    toast.error("Please log in to add a course")
  }
}

const remove = (user, list, listName, id, item) => {
  user.update({
    [listName]: firebase.firestore.FieldValue.arrayRemove(item),
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
