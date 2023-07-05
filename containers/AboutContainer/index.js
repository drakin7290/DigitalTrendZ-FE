import IntroduceCard from "~/components/common/IntroduceCard"
import styles from "./styles.module.scss"

export default function AboutContainer() {

    return (
        <main className={styles['main']}>
            <section className={styles['tree-chart']}>
                <div className={styles['tree-parent']}>
                    <IntroduceCard 
                        avatar='/imgs/about/hoang_anh.png'
                        name='Hoàng Anh'
                        role='Chủ Nhiệm CLB'
                        roleColor= '#BC7B2A'
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet.'
                        facebook='jịceic'
                        instagram='jịeịci'
                        messenger='iiiýwfwtft'
                    />
                </div>
                <div className={styles['tree-childs']}>
                    <div className={styles['tree-childs__element']}>
                        <IntroduceCard 
                            avatar='/imgs/about/minh_man.png'
                            name='Minh Mẩn'
                            role='Phó Chủ Nhiệm CLB'
                            roleColor= '#BC7B2A'
                            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet.'
                            facebook='jịceic'
                            instagram='jịeịci'
                            messenger='iiiýwfwtft'
                        />
                    </div>
                    <div className={styles['tree-childs__element']}>
                        <IntroduceCard 
                            avatar='/imgs/about/van_gioi.png'
                            name='Văn Giỏi'
                            role='Phó Chủ Nhiệm CLB'
                            roleColor= '#BC7B2A'
                            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet.'
                            facebook='jịceic'
                            instagram='jịeịci'
                            messenger='iiiýwfwtft'
                        />
                    </div>
                </div>

            </section>
            <section className={styles['tree-chart']}>
                <div className={styles['tree-parent']}>
                    <div className={styles['title-box']}>Ban Truyền thông</div>
                </div>
                <div className={styles['tree-childs']}>
                    <div className={styles['tree-childs__element']}>
                        <IntroduceCard 
                            avatar='/imgs/about/ngoc_han.png'
                            name='Ngọc Hân'
                            role='Trưởng Ban Truyền Thông'
                            roleColor = "#8d1a3c"
                            roleSize = "1.2rem"
                            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet.'
                            facebook='jịceic'
                            instagram='jịeịci'
                            messenger='iiiýwfwtft'
                        />
                    </div>
                    <div className={styles['tree-childs__element']}>
                        <IntroduceCard 
                            avatar='/imgs/about/my_duyen.png'
                            name='Mỹ Duyên'
                            role='Phó trưởng Ban Truyền Thông'
                            roleColor = "#8d1a3c"
                            roleSize = "1.2rem"
                            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet.'
                            facebook='jịceic'
                            instagram='jịeịci'
                            messenger='iiiýwfwtft'
                        />
                    </div>
                </div>

            </section>
            <section className={styles['tree-chart']}>
                <div className={styles['tree-parent']}>
                    <div className={styles['title-box']}>Ban Hậu cần - Tổ chức sự kiện</div>
                </div>
                <div className={styles['tree-childs']}>
                    <div className={styles['tree-childs__element']}>
                        <IntroduceCard 
                            avatar='/imgs/about/uyen_nhi.png'
                            name='Uyển Nhi'
                            role='Trưởng Ban Hậu cần - Tổ chức sự kiện'
                            roleColor = "#026840"
                            roleSize = "1.2rem"
                            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet.'
                            facebook='jịceic'
                            instagram='jịeịci'
                            messenger='iiiýwfwtft'
                        />
                    </div>
                    <div className={styles['tree-childs__element']}>
                        <IntroduceCard 
                            avatar='/imgs/about/xuan_y.png'
                            name='Xuân Ý'
                            role='Phó trưởng Ban Hậu cần - Tổ chức sự kiện'
                            roleColor = "#026840"
                            roleSize = "1.2rem"
                            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet.'
                            facebook='jịceic'
                            instagram='jịeịci'
                            messenger='iiiýwfwtft'
                        />
                    </div>
                </div>
            </section>
            <section className={styles['tree-chart']}>
                <div className={styles['tree-parent']}>
                    <div className={styles['title-box']}>Ban Chuyên môn</div>
                </div>
                <div className={styles['tree-childs--single']}>
                    <IntroduceCard 
                        avatar='/imgs/about/phuoc_toan.png'
                        name='Phước Toàn'
                        role='Trưởng Ban Chuyên môn'
                        roleColor = "#052879"
                        roleSize = "1.2rem"
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet.'
                        facebook='jịceic'
                        instagram='jịeịci'
                        messenger='iiiýwfwtft'
                    />
                </div>
            </section>
        </main>
    )
}