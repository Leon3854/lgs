import * as React from "react"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

export function useToast() {
  const [state, setState] = React.useState({ toasts: [] })
  const toast = ({ title, description, variant }: any) => {
    alert(`${title}: ${description}`) // Временная замена, пока не починим UI
  }
  return { toast, toasts: [] }
}