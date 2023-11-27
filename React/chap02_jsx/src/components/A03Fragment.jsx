import { Fragment } from 'react'

const A03Fragment = () => {
  return (
    // bundle 시 삭제되는 태그. 임시 루트 태그가 된다. 속성 할당 불가
    <Fragment>
      <h3>A03 Fragment</h3>

      {/* bundle 시 삭제되는 태그. Fragment와 동일. 속성을 할당 할 수 없다 */}
      <>
        This is Content
      </>
    </Fragment>
  )
}
export default A03Fragment;
