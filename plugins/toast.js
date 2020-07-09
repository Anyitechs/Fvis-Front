import Vue from 'vue'
Vue.prototype.$Toast = function (title, message, variant = "danger", date="Just Now") {
    const h = this.$createElement
    const vNodesMsg = h('p', { class: ['text-center', 'mb-0'] }, [
        h('b-spinner', { props: { type: 'grow', small: true } }),
        h('strong', ' ' + message + ' '),
        h('b-spinner', { props: { type: 'grow', small: true } })
    ])
    const vNodesTitle = h(
        'div',
        { class: ['d-flex', 'flex-grow-1', 'align-items-baseline', 'mr-2'] },
        [
            h('strong', { class: 'mr-2' }, title),
            h('small', { class: 'ml-auto text-italics' }, date)
        ]
    )
    this.$bvToast.toast([vNodesMsg], {
        title: [vNodesTitle],
        solid: true,
        variant: variant
    })
}
