    const counters = document.querySelectorAll('[data-counter]')

    if (counters) {
        counters.forEach(counter => {
            counter.addEventListener('click', e => {
                const target = e.target

                if (target.closest('.basket-counter')) {
                    let value = parseInt(target.closest('.basket-counter-wrapper').querySelector('input').value)

                    if (target.classList.contains('basket-counter-plus')) {
                        value++
                    } else {
                        --value
                    }

                    if (value <=1) {
                        value = 1
                    }

                    target.closest('.basket-counter-wrapper').querySelector('input').value = value
                }
            })
        })
    }