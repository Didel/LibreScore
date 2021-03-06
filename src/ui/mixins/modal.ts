
import { modalController } from '@ionic/vue/dist/index'

/**
 * A temporary workaround for `@ionic/vue` modal until the package reaches stable
 */
export const showModal = async (slot: HTMLElement, cssClass?: string | string[]): Promise<HTMLIonModalElement> => {
  const modal = await modalController.create({
    component: slot,
    keyboardClose: false,
    backdropDismiss: false,
    cssClass,
  })
  await modal.present()
  return modal
}

export const ModalMixin = {
  methods: {
    showModal (slot: HTMLElement): Promise<HTMLIonModalElement> {
      return showModal(slot)
    },
  },
}

export default ModalMixin
