this.$nextTick(() => {
                        new BScroll('#scroll_section', {  
                            deceleration: 0.001,
                            bounce: true,
                            swipeTime: 1800,
                            click: true,
                        }); 
                    })