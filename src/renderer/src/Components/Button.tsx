function Button({ children }: { children: string }): JSX.Element {
  return (
    <>
      <button className="dark:bg-brown-200 w-1/2  py-3 text-center text-white font-semibold rounded-full">
        {children}
      </button>
    </>
  )
}

export default Button
