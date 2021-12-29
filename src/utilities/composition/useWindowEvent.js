// CreatedBy: Pravesh Dwivedi Solace

import { onMounted, onUnmounted } from "vue";
// function to handle event
export default function useWindowEvent(eventName, handleEvent) {
  // add the key event
  onMounted(() => window.addEventListener(eventName, handleEvent));
  // remove the key event for other pages
  onUnmounted(() => window.removeEventListener(eventName, handleEvent));
}
