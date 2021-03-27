function ChooseInsectButton({insect, select}) {
  return (
    <button
      className="choose-insect-btn"
      onClick={() => select(insect)}
    >
      <p>{insect.label}</p>
      <img src={insect.img} alt={insect.label.toLowerCase()}/>
    </button>
  )
}

export default ChooseInsectButton