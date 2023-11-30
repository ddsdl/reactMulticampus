import React from 'react';
// npm i classnames
import cns from 'classnames'

import './css/A03Style.css'
import two from './css/A02Style2.module.css'

function A03Classnames() {
  const txt = 'text';
  const isChecked = true;

  return (
    <div>
      <h3 className="bg text space">A03 ClassNames Module</h3>
      <h3 className={cns('bg', txt, 'space')}>A03 ClassNames Module</h3>

      <h3 className={cns('bg', { 'text': isChecked, 'space': isChecked })}>A03 ClassNames Module</h3>
      <h3 className={isChecked ? 'bg text space' : undefined}>A03 ClassNames Module</h3>

      {/* key가 변수면 반드시 []로 참조해야 한다 */}
      <h3 className={cns('bg', { [txt]: isChecked, 'space': isChecked })}>A03 ClassNames Module</h3>
      <h3 className={cns({ [two.title]: isChecked, [two.reverse]: isChecked })}>A03 ClassNames Module</h3>

    </div>
  );
}

export default A03Classnames;
