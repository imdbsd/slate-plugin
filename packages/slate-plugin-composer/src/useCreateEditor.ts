import * as React from 'react'
import {createEditor} from 'slate'
import {withReact} from 'slate-react'
import {compose} from './commons'

const useCreateEditor = () => {
    // @ts-ignore
    const [editor] = React.useState(() => compose(withReact)(createEditor()))

    return editor
}

export default useCreateEditor