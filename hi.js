<hi(props, name) export>
	<h1 => 'Hello ', this.name || String(name)
	<input on-input=(e => this.pub('name', e.target.value)) />
</hi>

hi.props = {}

bitbox({ name: 'World' }, hi)

/** hi!box */
