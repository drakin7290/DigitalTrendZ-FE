import styles from "./styles.module.scss"
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

export default function InformationSection({dataUser}) {

    return (
            <div className={styles['info-container']}>
                <div className={styles['info']}>
                    <div className={styles['info__head']}>Họ và tên</div>
                    <div className={styles['info__body']}>{dataUser.name}</div>
                </div>
                <div className={styles['info']}>
                    <div className={styles['info__head']}>Mã số sinh viên</div>
                    <div className={styles['info__body']}>{dataUser.student_id}</div>
                </div>
                <div className={styles['info']}>
                    <div className={styles['info__head']}>Email</div>
                    <div className={styles['info__body']}>{dataUser.email}</div>
                </div>
                <div className={styles['info']}>
                    <div className={styles['info__head']}>Số điện thoại</div>
                    <div className={styles['info__body']}>{dataUser.phone}</div>
                </div>
                <div className={styles['info']}>
                    <div className={styles['info__head']}>Giới</div>
                    <div className={styles['info__body']}>
                    {   dataUser.gender == 1 
                        ?
                        <MaleIcon fontSize="large"/>
                        :
                        <FemaleIcon fontSize="large"/>
                    }
                    </div>
                </div>
                <div className={styles['info']}>
                    <div className={styles['info__head']}>Sinh nhật</div>
                    <div className={styles['info__body']}>{dataUser.birthday}</div>
                </div>
            </div>
    )
}