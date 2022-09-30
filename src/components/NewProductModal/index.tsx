import { X } from 'phosphor-react'
import Modal from 'react-modal'
import popupCartImg from '../../assets/carrinho-popup.svg'
import { useProductAddToCart } from '../../hooks/useProductAddedToCart'

import { Container } from './styles'

Modal.setAppElement('#root');

export function NewProductModal() {
  const { isNewProductModalOpen, handleCloseProductModal, setProductsInCart, cartWithoutThisProduct, nameOfProduct } = useProductAddToCart()

  function handlDeleteProductInCart() {
    setProductsInCart(cartWithoutThisProduct)
    handleCloseProductModal()
  }

  return (
    <Modal
      isOpen={isNewProductModalOpen}
      onRequestClose={handleCloseProductModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="btn-close-product-modal"
        onClick={handleCloseProductModal}
      >
        <X size={24} color="#6A6A6A" />
      </button>
      <Container>
        <img src={popupCartImg} alt="" />
        <h2>You've already added <span>{nameOfProduct}</span> to your basket. Do you want to remove it ?</h2>

        <div>
          <button
            className="btn-popup"
            onClick={handlDeleteProductInCart}
          >
            Yes
          </button>
          <button className="btn-popup" onClick={handleCloseProductModal}>No, keep it</button>
        </div>
      </Container>

    </Modal>
  )
}
