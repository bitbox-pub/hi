import { bit, box, pub } from 'bitbox'
import { h1, input } from 'bitbox/base'

<hi(props, name) export>
	<h1 => 'Hello ', this.name
	<input on-input=(e => pub(this, 'name', e.target.value)) />
</hi>

hi.bit = { name: 'World' }

let node = document.body

export const app = new bit(hi, function(i) {
	node = box(node, hi.call(this))
})

pub(app, 'name', 'Scooby Doo')

/** hi!box */
