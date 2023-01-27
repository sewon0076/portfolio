<template>
    <div class="cal_wrap">
        <div class="calendarHead">
            <h1 class="green">{{ monthToS }}</h1>
            <div id="pre" @click="controlMonth('prev')"></div>
            <div id="nex" @click="controlMonth('next')"></div>
        </div>
        <table style="width: 100%">
            <thead>
                <th v-for="day in days" :key="day" style="height: 60px">{{ day }}</th>
            </thead>
            <tbody>
                <tr v-for="(date, idx) in dates" :key="idx">
                    <td v-for="(day, index) in date" :key="index" style="height: 90px" v-bind:id="day">
                        <div>
                            {{ day }}
                        </div>
                        <!-- <div v-if="today" class="circle"></div> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            days: ["S", "M", "T", "W", "T", "F", "S"],
            months: ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"],
            dates: [],
            currentYear: 0,
            currentMonth: 0,
            year: 0,
            month: 0,
            currentDate: new Date().getDate(),
            prevDate: [],
            previewDate: [],
        };
    },
    computed: {
        monthToS: function () {
            return this.months[this.month - 1];
        },
        isCurrentDate: function () {
            let status = false;
            if (this.currentYear === 0 && this.currentMonth === 0) {
                status = true;
            } else {
                status = this.currentYear === new Date().getFullYear() && this.currentMonth === new Date().getMonth() + 1;
            }
            return status;
        },
    },
    created() {
        this.inits();
    },
    methods: {
        inits(param) {
            if (param) {
                this.year = param[0];
                this.month = param[1];
                this.calendarDate();
            } else {
                const date = new Date();
                this.year = date.getFullYear();
                this.month = date.getMonth() + 1;
                this.calendarDate();
            }
        },
        calendarDate() {
            const [monthFirstDay, monthLastDate, prevMonthLastDate] = this.getFirstDayLastDate(this.year, this.month);
            this.dates = this.getDaysOfMonth(monthFirstDay, monthLastDate, prevMonthLastDate);
        },
        getFirstDayLastDate(year, month) {
            const firstDay = new Date(year, month - 1, 1).getDay();
            const lastDate = new Date(year, month, 0).getDate();
            let lastMonth = month - 1;
            if (month === 1) {
                lastMonth = 12;
                year -= 1;
            }
            const prevLastDate = new Date(year, lastMonth, 0).getDate();
            return [firstDay, lastDate, prevLastDate];
        },
        getDaysOfMonth(monthFirstDay, monthLastDate, prevMonthLastDate) {
            let day = 1;
            let prevDay = prevMonthLastDate - monthFirstDay + 1;
            let dates = [];
            let daysOfWeek = [];
            while (day <= monthLastDate) {
                if (day === 1) {
                    this.getPrevDates(monthFirstDay, daysOfWeek, prevDay);
                    this.padDate(daysOfWeek);
                }
                if (daysOfWeek.length === 7) {
                    dates.push(daysOfWeek);
                    day = daysOfWeek[daysOfWeek.length - 1];
                    daysOfWeek = [];
                } else if (daysOfWeek.length < 7 && daysOfWeek.indexOf(monthLastDate) > -1) {
                    this.padDate(daysOfWeek);
                    dates.push(daysOfWeek);
                    break;
                }
                day++;
                if (daysOfWeek.length <= 7) {
                    daysOfWeek.push(day);
                }
            }
            return dates;
        },
        getPrevDates(monthFirstDay, daysOfWeek, prevDay) {
            for (let j = 0; j < monthFirstDay; j++) {
                daysOfWeek.push(prevDay);
                this.prevDate.push(prevDay);
                prevDay += 1;
            }
        },
        // 남은 날
        padDate(daysOfWeek) {
            const len = daysOfWeek.length;
            const leftDays = 7 - len;

            if (len >= 0 && len < 7) {
                for (let i = 1; i <= leftDays; i++) {
                    daysOfWeek.push(i);
                    if (this.previewDate.length < leftDays) this.previewDate.push(i);
                }
            }
        },
        controlMonth(p) {
            if (p === "prev") {
                this.currentMonth = this.month - 1;
                this.currentYear = this.year;
                if (this.month === 1) {
                    this.currentMonth = 12;
                    this.currentYear = this.year -= 1;
                }
            } else {
                this.currentMonth = this.month + 1;
                this.currentYear = this.year;
                if (this.month === 12) {
                    this.currentMonth = 1;
                    this.currentYear = this.year += 1;
                }
            }
            const param = [this.currentYear, this.currentMonth];
            this.inits(param);
        },
    },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&family=Nanum+Gothic:wght@400;700;800&display=swap");

.green {
    color: #b5ee40;
}
* {
    font-family: "Montserrat", sans-serif;
}
.kr {
    font-family: "Nanum Gothic", sans-serif;
}
.navy {
    color: #323232;
}
.cal_wrap {
    width: 100%;
    height: 100%;
    padding: 30px;
    border-radius: 15px;
    box-sizing: border-box;
    background-color: #fefefe;
}
.calendarHead {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    box-sizing: border-box;
    gap: 15px;
}
#nex {
    width: 15px;
    height: 15px;
    border-top: 3px solid #b5ee40;
    border-right: 3px solid #b5ee40;
    transform: rotate(45deg);
}
#pre {
    width: 15px;
    height: 15px;
    border-top: 3px solid #b5ee40;
    border-left: 3px solid #b5ee40;
    transform: rotate(-45deg);
}
.calendarHead h1 {
    font-size: 40px;
    font-weight: 900;
    text-align: center;
    margin-right: 15px;
}
table,
td {
    position: relative;
    text-align: center;
}
td {
    padding-top: 15px;
    box-sizing: border-box;
}
.circle {
    position: absolute;
    top: 7.5px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #b5ee40;
    opacity: 0.5;
}
</style>
