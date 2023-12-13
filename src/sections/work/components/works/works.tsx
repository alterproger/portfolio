'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { PROJECTS } from '../../libs/constants';
import { ProjectCategory } from '../../libs/enums';
import { WorkItem } from '../work-item/work-item';
import styles from './styles.module.scss';

type ProjectCategoryKey =
  (typeof ProjectCategory)[keyof typeof ProjectCategory];

const Works = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategoryKey>('all');

  const filteredProjects =
    selectedCategory === ProjectCategory.ALL
      ? PROJECTS
      : PROJECTS.filter(
          (project) =>
            project.category.toLowerCase() === selectedCategory.toLowerCase(),
        );

  return (
    <div>
      <div className={styles['filters']}>
        {Object.values(ProjectCategory).map((category) => (
          <button
            className={clsx(
              styles['item'],
              selectedCategory === category && styles['item-active'],
            )}
            type="button"
            key={category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={clsx(styles['container'], 'container grid')}>
        {filteredProjects.map((project) => (
          <WorkItem
            key={project.id}
            {...project}
          />
        ))}
      </div>
    </div>
  );
};

export { Works };
